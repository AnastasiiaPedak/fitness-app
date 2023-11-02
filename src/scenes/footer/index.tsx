import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Commodo quis imperdiet massa tincidunt nunc. Et tortor at risus viverra. 
            At ultrices mi tempus imperdiet nulla malesuada pellentesque. Tortor aliquam nulla facilisi cras. 
            Gravida cum sociis natoque penatibus et magnis dis parturient.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Sapien nec sagittis</p>
          <p className="my-5">Cursus in hac habitasse</p>
          <p>Et tortor at risus viverra</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Cursus in hac habitasse</p>
          <p>(333)438-4444</p>
        </div>
      </div>
      
    </footer>
  )
};

export default Footer;