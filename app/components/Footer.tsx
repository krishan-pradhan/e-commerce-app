
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../lib/localData";
import { Heart, Store } from "lucide-react";

const Footer = () => {

  return (
    <div className=" border-t lg:py-10 py-5">
      <div className="container flex justify-center flex-col lg:gap-10 gap-5 items-center">
        <Link className="border p-3 rounded-full hover:opacity-75" title="store logo" href="/"><Store/></Link>
        <div className="social-links flex gap-5 ">
          {socialLinks.map((link, i) => (
            <Link key={i} href={`${link.URL}`} title={link.iconName}>
              <Image src={`/images/svg/${link.icon}`} width={24} height={24} alt={"social-icon"} />
            </Link>
          ))}
        </div>
        <p className="copyright">Made with Love by Krishan Pradhan</p>
      </div>
    </div>
  )
}

export default Footer;