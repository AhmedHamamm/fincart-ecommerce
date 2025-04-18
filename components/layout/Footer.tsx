const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black text-white py-6">
      <div className="container mx-auto px-4 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Fincart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
