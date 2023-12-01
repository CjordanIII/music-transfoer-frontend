

import ArrowRight from '../icons/ArrowRight';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';


const Selecting = () => {
  return (
    <div>
        
      <div className="flex justify-evenly pt-40">
        
        <LeftContainer />
        <span className="pt-24 scale-150">
          {" "}
          <ArrowRight />
        </span>
        <RightContainer />
      </div>

    </div>
  );
}

export default Selecting;