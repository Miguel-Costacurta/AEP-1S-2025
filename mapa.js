const map = L.map('map').setView([-23.41847, -51.93809], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

const polos = [ 
    {pos: 1, nome: 'Hospital Universitario Regional', lat:-23.401262477520326, lng:-51.956334971464294, bikeQntd:5, patineteQntd:10, imagem:'images/locais/hospital_universitario.png'},
    {pos: 2, nome: 'Praça 7 De Setembro', lat:-23.422821164418053, lng:-51.953299297139914, bikeQntd:3, patineteQntd:12, imagem:'images/locais/praca_peladao.png'},
    {pos: 3, nome: 'Estação Terminal Intermodal', lat:-23.418473, lng:-51.938098, bikeQntd:10, patineteQntd:8, imagem:'images/locais/terminal_rodoviario.png'},
    {pos: 4, nome: 'Vila Olimpica', lat:-23.41243379629831, lng:-51.9380194302094, bikeQntd:9, patineteQntd:6, imagem:'images/locais/vila_olimpica.png'},
    {pos: 5, nome: 'Praça Rocha Pombo', lat:-23.421404364983943, lng:-51.928969416709584, bikeQntd:0, patineteQntd:2, imagem:'images/locais/rocha_pombo.png'},
    {pos: 6, nome: 'Praça Farroupilha', lat:-23.401238275265484, lng:-51.92071718031649, bikeQntd:4, patineteQntd:4, imagem:'images/locais/praca_farroupilha.png'},
    {pos: 7, nome: 'Parque do Inga', lat:-23.425683400781892, lng:-51.93287028787328, bikeQntd:9, patineteQntd:8, imagem:'images/locais/parque_do_inga.png'},
    {pos: 8, nome: 'Praça da Catedral', lat:-23.424571, lng:-51.938149, bikeQntd:1, patineteQntd:11, imagem:'images/locais/catedral.png'},
    {pos: 9, nome: 'Bosque II', lat:-23.43024470693862, lng:-51.94142637262559, bikeQntd:11, patineteQntd:5, imagem:'images/locais/bosque_II.png'},
    {pos: 10, nome: 'Praça Todos os Santos', lat:-23.43691020915539, lng:-51.93335911063106, bikeQntd:2, patineteQntd:0, imagem:'images/locais/teatro_mago.png'},
    {pos: 11, nome: 'Praça Salgado Filho', lat:-23.43356860021524, lng:-51.90812317623513, bikeQntd:0, patineteQntd:0, imagem:'images/locais/salgado_filho.png'},
    {pos: 12, nome: 'Estação Rodoviaria', lat:-23.425805433164545, lng:-51.910310576235204, bikeQntd:8, patineteQntd:10, imagem:'images/locais/rodoviaria.png'}
];

const marker = L.icon({
  iconUrl: 'images/image.png', 
  iconSize: [45, 45], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40] 
});

polos.forEach(polo => {
  const m = L.marker([polo.lat, polo.lng], { icon: marker })
      .addTo(map)
      .bindPopup(`<b>${polo.nome}</b>`);

  m.on('click', function () {
      cliquePolo(polo); 
  });
})


