var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_cdmx_dos_columnas_utm_1 = new ol.format.GeoJSON();
var features_cuadricula_cdmx_dos_columnas_utm_1 = format_cuadricula_cdmx_dos_columnas_utm_1.readFeatures(json_cuadricula_cdmx_dos_columnas_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_cdmx_dos_columnas_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_cdmx_dos_columnas_utm_1.addFeatures(features_cuadricula_cdmx_dos_columnas_utm_1);
var lyr_cuadricula_cdmx_dos_columnas_utm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_cdmx_dos_columnas_utm_1, 
                style: style_cuadricula_cdmx_dos_columnas_utm_1,
                interactive: true,
    title: 'cuadricula_cdmx_dos_columnas_utm<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_0.png" /> 0 - 4<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_1.png" /> 4 - 15<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_2.png" /> 15 - 31<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_3.png" /> 31 - 49<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_4.png" /> 49 - 67<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_5.png" /> 67 - 89<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_6.png" /> 89 - 118<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_7.png" /> 118 - 153<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_8.png" /> 153 - 186<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_9.png" /> 186 - 280<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_10.png" /> 280 - 357<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_11.png" /> 357 - 521<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_12.png" /> 521 - 638<br />'
        });
var format_buffers_cdmx_copia_1colbuffers_cdmx_2 = new ol.format.GeoJSON();
var features_buffers_cdmx_copia_1colbuffers_cdmx_2 = format_buffers_cdmx_copia_1colbuffers_cdmx_2.readFeatures(json_buffers_cdmx_copia_1colbuffers_cdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffers_cdmx_copia_1colbuffers_cdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffers_cdmx_copia_1colbuffers_cdmx_2.addFeatures(features_buffers_cdmx_copia_1colbuffers_cdmx_2);
var lyr_buffers_cdmx_copia_1colbuffers_cdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffers_cdmx_copia_1colbuffers_cdmx_2, 
                style: style_buffers_cdmx_copia_1colbuffers_cdmx_2,
                interactive: false,
                title: '<img src="styles/legend/buffers_cdmx_copia_1colbuffers_cdmx_2.png" /> buffers_cdmx_copia_1col — buffers_cdmx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_cdmx_dos_columnas_utm_1.setVisible(true);lyr_buffers_cdmx_copia_1colbuffers_cdmx_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_cdmx_dos_columnas_utm_1,lyr_buffers_cdmx_copia_1colbuffers_cdmx_2];
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_buffers_cdmx_copia_1colbuffers_cdmx_2.set('fieldAliases', {'Estación': 'Estación', 'Nombre del punto99': 'Nombre del punto99', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_buffers_cdmx_copia_1colbuffers_cdmx_2.set('fieldImages', {'Estación': 'TextEdit', 'Nombre del punto99': 'TextEdit', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_buffers_cdmx_copia_1colbuffers_cdmx_2.set('fieldLabels', {'Estación': 'no label', 'Nombre del punto99': 'no label', });
lyr_buffers_cdmx_copia_1colbuffers_cdmx_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});