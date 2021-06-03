import React from "react";
import Member from "../Member/Member";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="Time_Grid main animeLeft">
      <h1 className="title">Nosso time</h1>

      <Member
        src={"https://avatars.githubusercontent.com/u/43658933"}
        name={"Rafael"}
        bio={"Resiliente recem formado no curso Web dev pela Resilia Educação."}
        className={"member"}
      />

      <Member
        src={
          "https://media-exp1.licdn.com/dms/image/C4E03AQG87X3S0D8osg/profile-displayphoto-shrink_200_200/0/1601040371504?e=1628121600&v=beta&t=scNXuUBNcOM-R_jrXoldKJa-3KAIsfPAZqv5OJZH_0M"
        }
        name={"Thammy Bessa"}
        bio={
          "Facilitadora de aprendizagem | Criadora de conteúdo na Resilia Educação"
        }
        className={"member"}
      />
      <Member
        src={
          "https://media-exp1.licdn.com/dms/image/C4D0BAQHC76B0ml-3Lw/company-logo_200_200/0/1581703884703?e=1630540800&v=beta&t=8EllDUkHPttjPBHHZL2fBXTAind-6EhuwxXwfaHHaEQ"
        }
        name={"Resilia"}
        bio={
          "Impulsionamos novos talentos tech."}
        className={"member"}
      />

      <Member
        src={
          "https://media-exp1.licdn.com/dms/image/C4D0BAQFLjZHjNCzjFg/company-logo_200_200/0/1604492502959?e=1630540800&v=beta&t=gsna6hOaasgh0k5Hqyv5fRkmMeZvqAM0blVKBOnIxhY"
        }
        name={"Stone"}
        bio={"Parceira do pequeno negócio"}
        className={"member"}
      />
    </section>
  );
};

export default OurTeam;
