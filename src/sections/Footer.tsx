export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#070a14] border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-white font-medium text-lg">morphi</span>
        </div>

        <p className="text-sm text-text-muted text-center">
          Digital worlds for organizations that change lives.
        </p>

        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Morphi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
