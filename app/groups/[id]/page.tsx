"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"

export default function GroupChat() {
  const { id } = useParams()
  const [group, setGroup] = useState<{ name: string; topic: string } | null>(null)
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    // Simulating fetching group data
    setGroup({ name: `Group ${id}`, topic: "Sample Topic" })

    // Simulating fetching messages
    setMessages([
      { sender: "Alice", content: "Hey everyone! Ready to study?" },
      { sender: "Bob", content: "Yes, let's get started!" },
      { sender: "Charlie", content: "I have a question about the last topic..." },
    ])
  }, [id])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", content: newMessage }])
      setNewMessage("")
    }
  }

  if (!group) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold mb-4">{group.name}</h1>
        <p className="text-gray-600 mb-6">Topic: {group.topic}</p>

        <div className="h-96 overflow-y-auto border rounded-md p-4 mb-4">
          {messages.map((message, index) => (
            <motion.div key={index} className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-semibold">{message.sender}</p>
              <p className="bg-gray-100 p-2 rounded-md">{message.content}</p>
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
            className="bg-purple-600 text-white px-4 py-2 rounded-r-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

