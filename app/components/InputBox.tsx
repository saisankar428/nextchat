
export default function InputBox() {
  return (
     <div className="p-4 border-t bg-white flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Send
          </button>
        </div>
  )
}
