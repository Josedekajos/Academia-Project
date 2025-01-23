"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Groups() {
  const [groups, setGroups] = useState([
    { id: 1, name: "Computer Science Study Group", members: 25, topic: "Computer Science" },
    { id: 2, name: "Literature Circle", members: 15, topic: "English Literature" },
    { id: 3, name: "Math Wizards", members: 20, topic: "Mathematics" },
    { id: 4, name: "History Buffs", members: 18, topic: "History" },
    { id: 5, name: "Biology Explorers", members: 22, topic: "Biology" },
    { id: 6, name: "Physics Enthusiasts", members: 17, topic: "Physics" },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [newGroupName, setNewGroupName] = useState("")
  const [newGroupTopic, setNewGroupTopic] = useState("")

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.topic.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCreateGroup = () => {
    if (newGroupName && newGroupTopic) {
      const newGroup = {
        id: groups.length + 1,
        name: newGroupName,
        members: 1,
        topic: newGroupTopic,
      }
      setGroups([...groups, newGroup])
      setNewGroupName("")
      setNewGroupTopic("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Study Groups</h1>

          <motion.div
            className="bg-white shadow overflow-hidden sm:rounded-md p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-semibold mb-4">Create a New Group</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="Group Name"
                className="flex-grow p-2 border rounded-md"
              />
              <input
                type="text"
                value={newGroupTopic}
                onChange={(e) => setNewGroupTopic(e.target.value)}
                placeholder="Topic"
                className="flex-grow p-2 border rounded-md"
              />
              <motion.button
                onClick={handleCreateGroup}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Group
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow overflow-hidden sm:rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="px-4 py-5 sm:p-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search groups..."
                className="w-full p-2 border rounded-md mb-4"
              />
              <ul className="divide-y divide-gray-200">
                {filteredGroups.map((group) => (
                  <motion.li key={group.id} whileHover={{ scale: 1.02 }}>
                    <Link href={`/groups/${group.id}`} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-purple-600 truncate">{group.name}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {group.members} members
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">{group.topic}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

