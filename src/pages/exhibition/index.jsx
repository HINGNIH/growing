import { ExhibitionWrap} from './style';
import ExhibitionList from "../../components/exhibition/ExhibitionList";


const Exhibition = () => {
    return (
         <ExhibitionWrap>
        <img src='../../../public/images/popconBanner.png'></img>
        <div className="inner">
        
        <h2>팝콘랜드</h2>
        <ExhibitionList/>
      </div>
    </ExhibitionWrap>
    );
};

export default Exhibition;




