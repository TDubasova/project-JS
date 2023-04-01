import { Loading } from 'notiflix/build/notiflix-loading-aio';

Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
  fontFamily: 'Open Sans',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  customSvgCode: null,
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '32px',
  messageMaxLength: 32,
  messageColor: '#ffffff',
});

export function loadingShow() {
  Loading.custom('Loading...', {
    customSvgCode:
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 200"><path fill="#eff3f7" d="M51.563 0c-.895-.01-1.806.058-2.72.188-7.825 1.11-13.726 7.15-15.03 14.53-3.309-6.726-10.675-10.89-18.5-9.78C5.572 6.317-1.195 15.322.187 25.063c.844 5.946 4.538 10.788 9.5 13.343l.907 6.438L41.219 40.5c1.4-.199 2.748.601 2.937 1.938.19 1.336-.881 2.52-2.281 2.718L11.25 49.5l1.156 8.188a2.445 2.445 0 0 0 2.75 2.062l49.094-6.969a2.446 2.446 0 0 0 2.063-2.75l-2.75-19.25c4.055-3.834 6.28-9.522 5.437-15.468C67.748 6.485 60.212.092 51.562 0zm-.282 3.75c6.888-.1 12.945 4.936 13.938 11.938 1.076 7.591-4.19 14.642-11.781 15.718-7.592 1.077-14.643-4.22-15.72-11.812-1.077-7.595 4.22-14.611 11.813-15.688a13.817 13.817 0 0 1 1.75-.156zM17.563 8.531c6.887-.1 12.944 4.936 13.937 11.938 1.077 7.592-4.19 14.642-11.781 15.718C12.127 37.264 5.077 31.968 4 24.376 2.923 16.78 8.22 9.765 15.813 8.687a13.817 13.817 0 0 1 1.75-.156zM79.719 27.47l-12.781 6.187 1.593 11.157 14 2.406-2.812-19.75zm-38 13.593a2.696 2.696 0 0 0-.438.032L8.156 45.78l-.25-1.687-5.125-.157L4 52.532l4.875-1.593-.25-1.688 33.156-4.688c1.128-.16 1.918-1.068 1.782-2.03-.12-.843-.892-1.44-1.844-1.47zM51.53 57.22l-22.906 3.218v3.907h3.781L17.22 97.469a1.784 1.784 0 0 0 .875 2.375c.902.414 1.96.027 2.375-.875l15.875-34.625h1.937v33.875A1.77 1.77 0 0 0 40.063 100c.992 0 1.812-.788 1.812-1.781V64.344h1.813l16.03 34.625a1.784 1.784 0 0 0 2.376.875 1.82 1.82 0 0 0 .875-2.406L47.656 64.344h3.875v-7.125z" class="color000 svgShape"/><path fill="#eff3f7" d="M17.763 10.61a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zM9.71 16.46a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm16.102 0a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm-13.024 9.46a3.35 3.35 0 1 0 0 6.701 3.35 3.35 0 0 0 0-6.7zm9.95 0a3.35 3.35 0 1 0 .002 6.699 3.35 3.35 0 0 0-.001-6.698z" class="color000 svgShape"><animateTransform attributeName="transform" attributeType="XML" begin="0" dur="2s" from="0 17.66 22.74" repeatCount="indefinite" to="360 17.66 22.74" type="rotate"/></path><path fill="#eff3f7" d="M51.484 5.817a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm-8.054 5.851a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm16.102 0a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm-13.024 9.46a3.35 3.35 0 1 0 0 6.701 3.35 3.35 0 0 0 0-6.7zm9.95 0a3.35 3.35 0 1 0 .002 6.699 3.35 3.35 0 0 0-.001-6.698z" class="color000 svgShape"><animateTransform attributeName="transform" attributeType="XML" begin="0" dur="3.6s" from="0 51.4 17.7" repeatCount="indefinite" to="360 51.4 17.7" type="rotate"/></path></svg></svg>',
    svgSize: '200px',
  });
}

export function loadingRemove() {
  Loading.remove(500);
}
