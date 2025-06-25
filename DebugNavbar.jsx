export default function DebugNavbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-indigo-600">Debug.dev</div>
        <div className="flex space-x-6 bg-yellow-200 p-2">
          <a href="#">About</a>
          <a href="#">Projects</a>
        </div>
      </div>
    </nav>
  );
}
