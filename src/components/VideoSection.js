import React from 'react';
import './VideoPlayer.css'; // Estilos para o player de vídeo

// Exemplo de vídeo local. Idealmente, o caminho viria de props ou config.
// import videoExemplo from '../../public/assets/videos/video_apresentacao.mp4';

const VideoPlayer = ({ videoSrc, videoType = 'mp4', youtubeVideoId }) => {
  if (youtubeVideoId) {
    return (
      <div className="video-player-container aspect-ratio-16-9">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="Vídeo de Apresentação Priscila Kollin"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Fallback para vídeo local se youtubeVideoId não for fornecido
  // Certifique-se que o videoSrc aponta para um vídeo em public/assets/videos/
  const localVideoPath = videoSrc || "/assets/videos/video_apresentacao.mp4"; // Placeholder

  return (
    <div className="video-player-container aspect-ratio-16-9">
      <video controls width="100%">
        <source src={localVideoPath} type={`video/${videoType}`} />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

const VideoSection = () => {
  // Você pode definir o ID do vídeo do YouTube aqui ou passá-lo como prop
  // const YOUTUBE_VIDEO_ID = 'SEU_ID_DO_VIDEO_YOUTUBE';
  // Ou o caminho para um vídeo local em public/assets/videos/
  // const LOCAL_VIDEO_SRC = "/assets/videos/WhatsApp Video 2025-04-28 at 11.34.58.mp4";

  return (
    <section id="video-presentation" className="video-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Uma Mensagem Especial</h2>
        <p className="section-subtitle text-center">Veja como Priscila Kollin pode transformar sua jornada.</p>
        {/* Para vídeo do YouTube: */}
        {/* <VideoPlayer youtubeVideoId={YOUTUBE_VIDEO_ID} /> */}
        
        {/* Para vídeo local (exemplo, um dos vídeos fornecidos): */}
        {/* Lembre-se de colocar o vídeo na pasta public/assets/videos/ */}
        <VideoPlayer videoSrc={"/assets/videos/WhatsApp Video 2025-04-28 at 11.34.58.mp4"} videoType="mp4" />
        {/* <VideoPlayer videoSrc={LOCAL_VIDEO_SRC} videoType="mp4" /> */}
      </div>
    </section>
  );
};

export default VideoSection; // Exportar a seção inteira
// export { VideoPlayer }; // Exportar o player se for usado em outro lugar

