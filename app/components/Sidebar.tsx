export default function Sidebar() {
  return (
      <div className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-4">NextChat</h1>

        <button className="w-full bg-gray-700 p-2 rounded mb-4 hover:bg-gray-600">
          + New Chat
        </button>

        <div className="space-y-2">
          <div className="p-2 rounded hover:bg-gray-700 cursor-pointer">
            Chat 1
          </div>
          <div className="p-2 rounded hover:bg-gray-700 cursor-pointer">
            Chat 2
          </div>
        </div>
      </div>
  )
}
