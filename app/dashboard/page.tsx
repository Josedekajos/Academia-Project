"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  })

  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Math Assignment", completed: false },
    { id: 2, title: "Read Chapter 5 of History Book", completed: true },
    { id: 3, title: "Prepare for Physics Quiz", completed: false },
  ])

  const [newTask, setNewTask] = useState("")

  const [groups, setGroups] = useState([
    { id: 1, name: "Math Study Group" },
    { id: 2, name: "History Discussion Club" },
    { id: 3, name: "Science Enthusiasts" },
  ])

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout")
  }

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }])
      setNewTask("")
    }
  }

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

          {/* User Profile */}
          <motion.div
            className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">Profile</h2>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </motion.div>

          {/* Tasks */}
          <motion.div
            className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">Tasks</h2>
            <ul className="space-y-2">
              {tasks.map((task) => (
                <motion.li key={task.id} className="flex items-center space-x-2" whileHover={{ scale: 1.02 }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className={task.completed ? "line-through text-gray-500" : ""}>{task.title}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New task"
                className="flex-grow p-2 border rounded-md"
              />
              <motion.button
                onClick={handleAddTask}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Task
              </motion.button>
            </div>
          </motion.div>

          {/* Groups */}
          <motion.div
            className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">Your Groups</h2>
            <ul className="space-y-2">
              {groups.map((group) => (
                <motion.li key={group.id} whileHover={{ scale: 1.02 }}>
                  <Link href={`/groups/${group.id}`} className="text-purple-600 hover:underline">
                    {group.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Logout Button */}
          <div className="mt-8 flex justify-end">
            <motion.button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log out
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

