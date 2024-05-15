
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 

interface IconInterface {
    iconName: IconProp;
    width: number;
    height: number;
    color: string;
}

const Icon = ({ iconName, width = 16, height = 16, color = '#fff' }: IconInterface) => {

  const iconStyle: React.CSSProperties = {
    width: width,
    height: height
};

  return (
    <FontAwesomeIcon icon={iconName} color={color} style={iconStyle}/>
  );
}

export default Icon;
