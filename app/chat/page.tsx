"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const recentChats = [
  { id: 1, name: "Alice Johnson", lastMessage: "Hey, how's your study going?" },
  { id: 2, name: "Bob Smith", lastMessage: "Did you finish the math assignment?" },
  { id: 3, name: "Charlie Brown", lastMessage: "Are we still meeting tomorrow?" },
]

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [newChatUsername, setNewChatUsername] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState("")

  const handleChatSelect = (id: number) => {
    setSelectedChat(id)
    setMessages([]) // Reset messages when selecting a new chat
  }

  const handleNewChat = () => {
    if (newChatUsername.trim()) {
      setSelectedChat(null)
      setMessages([])
      setNewChatUsername("")
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Chat</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 border-r pr-4">
            <h2 className="text-xl font-semibold mb-2">Recent Chats</h2>
            {recentChats.map((chat) => (
              <motion.div
                key={chat.id}
                className={`p-2 rounded-md cursor-pointer ${selectedChat === chat.id ? "bg-purple-100" : "hover:bg-gray-100"}`}
                onClick={() => handleChatSelect(chat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </motion.div>
            ))}
            <div className="mt-4">
              <input
                type="text"
                value={newChatUsername}
                onChange={(e) => setNewChatUsername(e.target.value)}
                placeholder="Enter username to start a new chat"
                className="w-full p-2 border rounded-md"
              />
              <motion.button
                onClick={handleNewChat}
                className="mt-2 w-full bg-purple-600 text-white p-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start New Chat
              </motion.button>
            </div>
          </div>
          <div className="col-span-2">
            {selectedChat !== null || newChatUsername ? (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedChat !== null ? recentChats.find((chat) => chat.id === selectedChat)?.name : newChatUsername}
                </h2>
                <div className="h-64 overflow-y-auto border rounded-md p-2 mb-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      className="mb-2 p-2 bg-gray-100 rounded-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {message}
                    </motion.div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow p-2 border rounded-l-md"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="bg-purple-600 text-white p-2 rounded-r-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send
                  </motion.button>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500 mt-8">Select a chat or start a new one</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

