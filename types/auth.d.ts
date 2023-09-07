interface AuthState {
    user: UserTokenType;
    token: Token;
    onboarded: boolean;
    loading: boolean;
    nav: boolean
    appNav: boolean
  }
  type UserTokenType = {
    first_name: string
    last_name: string
    email: string
    phone: string
  } | null
  
  type AuthAction =
    | { type: 'SET_USER'; payload: UserTokenType }
    | { type: 'SET_ONBOARDED'; payload: boolean }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'Change_Nav'; payload: boolean }
    | { type: 'LOGOUT' };
  
  interface AuthContextType extends AuthState {
    logout: () => void;
    setIsOnboarded: () => void;
    setUser: (userData: UserTokenType) => void;
    changeNav: (val: boolean) => void
  }