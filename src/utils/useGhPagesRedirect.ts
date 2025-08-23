import { useEffect } from 'react';
import { useNavigate } from 'react-router';

/**
 * github pages の 404.html からのリダイレクトを処理するフック
 */
export function useGhPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
}
