import { useState, useEffect } from "react";
import { Layout, Menu, Card, Input, Button, Select, Switch } from "antd";
import {
  SendOutlined,
  PlusOutlined,
  BulbOutlined,
  BulbFilled,
} from "@ant-design/icons";
import "antd/dist/reset.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("deepseek-r1");
  const [history, setHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, prompt: input }),
      });

      const reader = response.body.getReader();
      let botMessage = { role: "bot", content: "" };
      setMessages((prev) => [...prev, botMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        try {
          const json = JSON.parse(text);
          botMessage.content += json.response;
          setMessages((prev) =>
            prev.map((msg, index) =>
              index === prev.length - 1 ? botMessage : msg
            )
          );
        } catch (e) {
          console.error("Parsing error:", e);
        }
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const startNewChat = () => {
    if (messages.length) {
      setHistory([...history, { id: history.length, messages }]);
    }
    setMessages([]);
    setActiveChat(history.length);
  };

  return (
    <Layout
      style={{ height: "100vh", background: darkMode ? "#1a1a1a" : "#fff" }}
    >
      {/* Sidebar */}
      <Sider
        width={250}
        style={{
          background: darkMode ? "#141414" : "#f0f2f5",
          padding: "16px",
        }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          block
          onClick={startNewChat}
        >
          New Chat
        </Button>
        <Menu
          mode="inline"
          style={{
            marginTop: "16px",
            background: darkMode ? "#141414" : "#f0f2f5",
          }}
        >
          {history.map((chat, index) => (
            <Menu.Item
              key={chat.id}
              onClick={() => setMessages(chat.messages)}
              style={{
                background:
                  activeChat === index ? (darkMode ? "#333" : "#e6f7ff") : "",
              }}
            >
              Chat {chat.id + 1}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      {/* Main Chat Area */}
      <Layout>
        <Header
          style={{
            background: darkMode ? "#333" : "white",
            padding: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            Chat with Ollama
          </span>
          <Select
            value={model}
            onChange={setModel}
            style={{ marginLeft: "auto", width: 200 }}
          >
            <Option value="deepseek-r1">DeepSeek R1</Option>
            <Option value="llama2">Llama 2</Option>
            <Option value="mistral">Mistral</Option>
          </Select>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
            style={{ marginLeft: "16px" }}
          />
        </Header>

        {/* <Content style={{ padding: "16px", overflowY: "auto", background: darkMode ? "#1a1a1a" : "#fff" }}>
          {messages.map((msg, index) => (
            <Card
              key={index}
              style={{
                marginBottom: "8px",
                background: msg.role === "user" ? (darkMode ? "#0050b3" : "#d9f7be") : (darkMode ? "#262626" : "#f0f2f5"),
                textAlign: msg.role === "user" ? "right" : "left",
                color: darkMode ? "#fff" : "#000"
              }}
            >
              {msg.content}
            </Card>
          ))}
        </Content> */}
        <Content
          style={{
            padding: "16px",
            overflowY: "auto",
            background: darkMode ? "#1a1a1a" : "#fff",
          }}
        >
          {messages.map((msg, index) => (
            <Card
              key={index}
              style={{
                marginBottom: "8px",
                background:
                  msg.role === "user"
                    ? darkMode
                      ? "#0050b3"
                      : "#d9f7be"
                    : darkMode
                    ? "#262626"
                    : "#f0f2f5",
                textAlign: msg.role === "user" ? "right" : "left",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {msg.content}
              </ReactMarkdown>
            </Card>
          ))}
        </Content>

        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            background: darkMode ? "#141414" : "#fff",
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              marginRight: "8px",
              background: darkMode ? "#262626" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          />
          <Button type="primary" icon={<SendOutlined />} onClick={sendMessage}>
            Send
          </Button>
        </div>
      </Layout>
    </Layout>
  );
}
