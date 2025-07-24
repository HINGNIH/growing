import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
import { NavWrap } from "./style";

const NavBar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 100; // 헤더 높이 픽셀값
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <NavWrap className="nav">
      <ul>
        <li>
          <button onClick={() => scrollToSection("intro")}>소개</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("timeline")}>타임라인</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("channel")}>소식채널</button>
        </li>
        <li>
          <Link to={"/exhibition"}>
            {isMobile ? <><TbExternalLink /> 팝콘랜드 바로가기</> : "팝콘랜드"}
          </Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default NavBar;