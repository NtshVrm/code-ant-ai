export default function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-[2fr_10fr] h-screen">
        <aside className="bg-blue-500 h-full flex flex-col mobile:hidden">
          <header>logo</header>
          <div>Dropdown</div>
          <section className="flex flex-col justify-between bg-red-300 flex-grow">
            <div>
              <p>Repositories</p>
              <p>AI Code Review</p>
              <p>Cloud Security</p>
              <p>How to Use</p>
              <p>Settings</p>
            </div>
            <div>
              <p>Support</p>
              <p>Logout</p>
            </div>
          </section>
        </aside>
        <section className="h-full">main dashboard</section>
      </main>
    </>
  );
}
