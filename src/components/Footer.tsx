export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-800 border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="text-center">
          <p className="text-primary-700 text-sm">
            Copyright &copy; Nwanze Ebube Ibifuro {new Date().getFullYear()} All
            rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
