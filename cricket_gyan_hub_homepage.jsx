export default function CricketGyanHub() {
  const articles = [
    {
      title: "IPL 2026: शानदार मुकाबले में टीम की जीत",
      category: "Cricket",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Board Exam तैयारी के लिए Best Tips",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "हर दिन मोटिवेट रहने के आसान तरीके",
      category: "Motivation",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Breaking News */}
      <div className="bg-red-600 overflow-hidden whitespace-nowrap py-2 text-sm font-semibold">
        <div className="animate-marquee inline-block px-4">
          🔥 Breaking News: IPL 2026 में शानदार प्रदर्शन | 📚 Exam Tips अपडेट | 💡 Daily Motivation Quotes
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-red-500">
              Cricket Gyan Hub
            </h1>
            <p className="text-sm text-zinc-400">
              Cricket • Education • News • Motivation
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#" className="hover:text-red-500">Cricket</a>
            <a href="#" className="hover:text-red-500">Education</a>
            <a href="#" className="hover:text-red-500">News</a>
            <a href="#" className="hover:text-red-500">Motivation</a>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl shadow-2xl font-semibold">
          Login / Register
        </button>
      </div>

      {/* Login Section */}
      <section className="max-w-md mx-auto px-4 py-14">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-2 text-center">
            Member Login
          </h3>

          <p className="text-zinc-400 text-center mb-8">
            Cricket Gyan Hub में login करें
          </p>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-red-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-red-500"
            />

            <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-2xl font-semibold text-lg">
              Login
            </button>

            <button className="w-full bg-white text-black hover:bg-zinc-200 py-3 rounded-2xl font-semibold text-lg">
              Continue with Google
            </button>
          </div>

          <p className="text-center text-zinc-400 mt-6 text-sm">
            New user? <span className="text-red-500 cursor-pointer">Create Account</span>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1600&auto=format&fit=crop"
          alt="Cricket"
          className="w-full h-[350px] object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to Cricket Gyan Hub
          </h2>
          <p className="max-w-2xl text-zinc-200 text-lg">
            हिंदी में Cricket Updates, Education Notes, Latest News और Daily Motivation.
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold shadow-lg">
            Explore Articles
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-8">Top Categories</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "🏏 Cricket",
            "📚 Education",
            "📰 News",
            "💡 Motivation",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-500 transition"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Latest Articles</h3>
          <button className="text-red-500 hover:underline">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <span className="text-xs bg-red-600 px-3 py-1 rounded-full">
                  {article.category}
                </span>

                <h4 className="text-xl font-bold mt-4 mb-2">
                  {article.title}
                </h4>

                <p className="text-zinc-400 text-sm">
                  पढ़ें पूरी जानकारी और अपडेट Cricket Gyan Hub पर।
                </p>

                <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Section */}
      <section className="bg-zinc-950 py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Latest YouTube Videos</h3>
          <p className="text-zinc-400 mb-8">
            हमारे latest cricket और education videos देखें।
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full rounded-2xl h-72"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full rounded-2xl h-72"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Motivation Quote */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Daily Motivation</h3>
          <p className="text-xl italic leading-relaxed">
            “सफलता उन्हीं को मिलती है जो मेहनत करने से कभी नहीं डरते।”
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 text-center text-zinc-400">
        <h4 className="text-xl font-bold text-white mb-2">
          Cricket Gyan Hub
        </h4>
        <p>
          © 2026 Cricket Gyan Hub • All Rights Reserved
        </p>
      </footer>

      {/* Admin Dashboard Preview */}
      <section className="bg-black py-16 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold">Admin Dashboard</h3>
              <p className="text-zinc-400 mt-2">
                Articles, videos और news को आसानी से manage करें।
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl font-semibold">
              Upload New Post
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {[
              { title: "Total Articles", value: "125+" },
              { title: "YouTube Videos", value: "48" },
              { title: "Live News", value: "20" },
              { title: "Visitors", value: "15K" },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
              >
                <p className="text-zinc-400 text-sm">{card.title}</p>
                <h4 className="text-3xl font-bold mt-3 text-red-500">
                  {card.value}
                </h4>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h4 className="text-2xl font-bold mb-4">Latest Posts</h4>

              <div className="space-y-4">
                {[
                  "IPL Final Match Analysis",
                  "Class 10 Exam Preparation Tips",
                  "Daily Motivation Quote",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-zinc-800 rounded-2xl px-4 py-3"
                  >
                    <p>{item}</p>
                    <button className="text-red-500 text-sm hover:underline">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h4 className="text-2xl font-bold mb-4">Live Score Preview</h4>

              <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">IPL 2026</span>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
                    LIVE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>CSK</span>
                    <span>182/5</span>
                  </div>

                  <div className="flex justify-between text-lg">
                    <span>MI</span>
                    <span>175/8</span>
                  </div>
                </div>

                <p className="mt-5 text-sm text-zinc-100">
                  CSK won by 7 runs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firebase Setup Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-red-500">
            Firebase Integration
          </h3>

          <p className="text-zinc-400 mb-8 leading-relaxed">
            Login system, database, article storage और real-time updates के लिए Firebase जोड़ा गया है।
          </p>

          <div className="bg-black rounded-2xl p-5 overflow-x-auto border border-zinc-800">
            <pre className="text-sm text-green-400 whitespace-pre-wrap">
{`// Firebase Config Example
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);`}
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {[
              "🔐 Google Login",
              "📰 Real-time Articles",
              "☁️ Cloud Database",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-5 text-center"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold">
            Connect Firebase
          </button>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
