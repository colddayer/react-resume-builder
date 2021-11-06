import emailIcon from './email.png';
import phoneIcon from './phone.png';
import githubIcon from './github.png';
import companyIcon from './company.png';

export const getImage = (type: string) => {
  const iconMap = {
    emailIcon,
    phoneIcon,
    githubIcon,
    companyIcon
  };
  return iconMap[type];
};
