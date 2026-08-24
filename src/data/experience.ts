export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Desarrollador",
    org: "Tutora Business / Independiente",
    period: "5 años",
    description:
      "Llevando adelante el proyecto SYSTUTOR: desde el mantenimiento y reversa del sistema legacy hasta el diseño y construcción del ecosistema actual — kernel open-source, ERP multi-tenant con plugins y metodología ADD — con clientes migrados y en producción. Trabajo repartido entre el negocio familiar y proyectos independientes para clientes directos.",
  },
  {
    role: "WordPress y PHP a medida",
    org: "Independiente",
    period: "en paralelo",
    description:
      "Sitios y sistemas de gestión sobre WordPress con plugins personalizados cuando el estándar no alcanza: ardiffx.com (tienda WooCommerce con tokens únicos para links de descarga segura), gestiongasesindustriales.com y systutor.com.",
  },
  {
    role: "Soporte técnico e infraestructura",
    org: "Tutora Business / Independiente",
    period: "en paralelo",
    description:
      "Diagnóstico y reparación de equipos a nivel componente, rescate de datos, redes y puesta a punto de máquinas de producción. Cada bug que llegaba con el equipo apagado enseñó a escribir software pensando en el día en que algo se rompe: por eso la auditoría, los backups y la trazabilidad no son features aquí — son religión.",
  },
];
