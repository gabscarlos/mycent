import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";

export default function RedesSociais() {
  return (
    <div className="flex">
      <RedeSocial
        icone={<IconBrandYoutube />}
        url="https://www.youtube.com/@mycent"
      />
      <RedeSocial
        icone={<IconBrandInstagram />}
        url="https://www.instagram.com/mycent/"
      />
      <RedeSocial
        icone={<IconBrandFacebook />}
        url="https://www.facebook.com/mycent/"
      />
      <RedeSocial
        icone={<IconBrandGithub />}
        url="https://github.com/gabscarlos"
      />
    </div>
  );
}
