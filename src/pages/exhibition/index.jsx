import { ExhibitionWrap} from './style';
import ExhibitionList from "../../components/exhibition/ExhibitionList";


const Exhibition = () => {
    return (
         <ExhibitionWrap>
        <img src="/images/popconBanner.png" alt="팝콘 배너" />
        <div className="inner">
        
        <h2>팝콘랜드</h2>
        <ExhibitionList/>
      </div>
    </ExhibitionWrap>
    );
};

export default Exhibition;




