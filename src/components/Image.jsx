const Image = ({ src, alt, loading = "lazy", ...attributes }) => {
  return <img src={src} alt={alt} loading={loading} {...attributes} />;
};

export default Image;
