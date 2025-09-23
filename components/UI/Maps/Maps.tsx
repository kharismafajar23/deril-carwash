"use client";
import React from "react";

const GoogleMap = ({ zoom = 13, width = "100%", height = "400" }) => {
  const baseUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261.7891152696751!2d109.97745674636748!3d-7.732801737175386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768";

  // inject zoom level ke URL
  const mapUrl = `${baseUrl}!4f${zoom}!3m3!1m2!1s0x2e7ae92e34049e47%3A0x6cb0e738691b3272!2sCucian%20Demangan!5e0!3m2!1sid!2sid!4v1758603944917!5m2!1sid!2sid`;

  return (
    <iframe
      src={mapUrl}
      width={width}
      height={height}
      className="rounded-xl border-color border-6"
    />
  );
};

export default GoogleMap;
