var wms_layers = [];

var format_Candido_superficies_0 = new ol.format.GeoJSON();
var features_Candido_superficies_0 = format_Candido_superficies_0.readFeatures(json_Candido_superficies_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Candido_superficies_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Candido_superficies_0.addFeatures(features_Candido_superficies_0);
var lyr_Candido_superficies_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Candido_superficies_0, 
                style: style_Candido_superficies_0,
                popuplayertitle: "Candido_superficies",
                interactive: true,
    title: 'Candido_superficies<br />\
    <img src="styles/legend/Candido_superficies_0_0.png" /> jardin<br />\
    <img src="styles/legend/Candido_superficies_0_1.png" /> pavimento blando<br />\
    <img src="styles/legend/Candido_superficies_0_2.png" /> tierra desnuda<br />\
    <img src="styles/legend/Candido_superficies_0_3.png" /> fuente<br />\
    <img src="styles/legend/Candido_superficies_0_4.png" /> otros<br />'
        });
var format_Candido_especies_1 = new ol.format.GeoJSON();
var features_Candido_especies_1 = format_Candido_especies_1.readFeatures(json_Candido_especies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Candido_especies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Candido_especies_1.addFeatures(features_Candido_especies_1);
var lyr_Candido_especies_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Candido_especies_1, 
                style: style_Candido_especies_1,
                popuplayertitle: "Candido_especies",
                interactive: true,
                title: '<img src="styles/legend/Candido_especies_1.png" /> Candido_especies'
            });

lyr_Candido_superficies_0.setVisible(true);lyr_Candido_especies_1.setVisible(true);
var layersList = [lyr_Candido_superficies_0,lyr_Candido_especies_1];
lyr_Candido_superficies_0.set('fieldAliases', {'fid': 'fid', 'Elemento': 'Elemento', 'SUP': 'SUP', 'COD_recint': 'COD_recint', });
lyr_Candido_especies_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', '_Especie': '_Especie', 'singular': 'singular', 'Leyenda': 'Leyenda', 'CLASI': 'CLASI', });
lyr_Candido_superficies_0.set('fieldImages', {'fid': 'TextEdit', 'Elemento': 'TextEdit', 'SUP': 'TextEdit', 'COD_recint': 'TextEdit', });
lyr_Candido_especies_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '_Especie': 'TextEdit', 'singular': 'TextEdit', 'Leyenda': 'TextEdit', 'CLASI': 'TextEdit', });
lyr_Candido_superficies_0.set('fieldLabels', {'fid': 'no label', 'Elemento': 'no label', 'SUP': 'no label', 'COD_recint': 'no label', });
lyr_Candido_especies_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '_Especie': 'no label', 'singular': 'no label', 'Leyenda': 'no label', 'CLASI': 'no label', });
lyr_Candido_especies_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});