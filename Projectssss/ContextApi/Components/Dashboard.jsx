import { useTheme } from "../Context/ThemeContext";
import { useUser } from "../Context/User-Context";

export function Dashboard() {
  const { user } = useUser();
  const {theme}=useTheme()

  if (!user.isLoggedIn) {
    return null;
  }

  return (
    <div className={`max-w-2xl mx-auto mt-10 p-6 ${theme?'text-gray-900 bg-gray-500':'text-gray-200 bg-gray-900 '} rounded-lg shadow-xl`}>
      <h2 className="text-2xl font-bold mb-4 ">Dashboard</h2>
      <div className="space-y-3">
        <p className="">
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p className="">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">✅ You are successfully logged in!</p>
        </div>
      </div>
    </div>
  );
}
