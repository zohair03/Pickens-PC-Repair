const MapSection = () => {
  // Replace with your actual coordinates
  const lat = 43.0642;
  const lng = -88.1235;
  const zoom = 14;
  const businessName = "RN Infotech";

  return (
    <div className="p-0 w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.8333348776747!2d72.8172658141857!3d18.9608795921426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf06ab665385%3A0xd876d17c77a5c4e!2sAcer%20Mall%20-%20Exclusive%20Store!5e0!3m2!1sen!2sin!4v1773403549729!5m2!1sen!2sin`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${businessName} Location`}
        />
      </div>
    </div>
  );
};

export default MapSection;