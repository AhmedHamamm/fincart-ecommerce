const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Fincart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
