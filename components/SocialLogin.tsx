import WhiteButtonWithIcon from './StyledButtonWhite';

export interface SocialLoginProps {
  company: 'google' | 'microsoft';
}

function upperCaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function SocialLogin({ company }: SocialLoginProps) {
  let svg: string;

  switch (company) {
    case 'google':
      svg = 'https://icons.getbootstrap.com/assets/icons/google.svg';
      break;
    case 'microsoft':
      svg = 'https://icons.getbootstrap.com/assets/icons/microsoft.svg';
      break;
    default:
      svg =
        'https://upload.wikimedia.org/wikipedia/commons/d/d1/Love_Live%21_series_logo.svg';
  }

  return (
    <WhiteButtonWithIcon
      title='Sign in with'
      titleBold={upperCaseFirstLetter(company)}
      svg={svg}
      onPress={() => {
        console.log('Sign in with ' + company);
      }}
    />
  );
}
