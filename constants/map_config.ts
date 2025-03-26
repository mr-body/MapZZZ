export const mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#F5F5F5',  // Fundo do mapa (branco muito suave, criando um fundo neutro)
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',  // Remover ícones de pontos de interesse (para um visual mais limpo)
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#BDBDBD',  // Cor para texto de rótulos (cinza suave para boa legibilidade sem sobrecarregar)
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#F5F5F5',  // Cor de contorno do texto (a mesma cor do fundo, criando uma borda suave)
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          color: '#E0E0E0',  // Áreas administrativas (cinza claro para uma separação sutil)
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9E9E9E',  // Rótulos de países (cinza mais escuro para distinguir sem pesar)
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#DCDCDC',  // Áreas de paisagem (cinza muito suave, mantendo o contraste baixo)
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#BDBDBD',  // Pontos de interesse (cinza suave, com pouca diferenciação do fundo)
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',  // Negócios e comércios (cinza mais escuro para distinção sem ser muito chamativo)
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#BDBDBD',  // Estradas principais (cinza suave, criando uma rede de ruas sem exagerar)
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',  // Rótulos de ruas arteriais (um cinza mais escuro para visibilidade)
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#9E9E9E',  // Rodovias (cinza claro, criando um contraste discreto com o fundo)
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',  // Rodovias de acesso controlado (cinza escuro para maior contraste nos rótulos)
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#BDBDBD',  // Transporte (cinza suave, não chamativo, integrando com o fundo)
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',  // Estações de transporte (um tom de cinza mais escuro para facilitar a leitura)
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#B0BEC5',  // Água (um tom de cinza azulado, que mantém o estilo monocromático)
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9E9E9E',  // Texto sobre áreas de água (cinza para manter harmonia com o restante do mapa)
        },
      ],
    },
  ];
  