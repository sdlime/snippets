#!/bin/sh

# clean out anything previously downloaded
rm -rf data/natural_earth_vector data/natural_earth_raster
mkdir data/natural_earth_vector data/natural_earth_raster

#
# Natural Earth 50m Cultural Data
#
layers=(ne_50m_admin_0_countries ne_50m_populated_places)
for l in ${layers[@]}; do
  wget -N https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/cultural/${l}.zip
  unzip ${l}.zip -d data/natural_earth_vector/50m_cultural
  rm ${l}.zip
done

#
# Natural Earth 50m Physical Data
#
layers=()
for l in ${layers[@]}; do
  wget -N https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/physical/${l}.zip
  unzip ${l}.zip -d data/natural_earth_vector/50m_physical
  rm ${l}
done

#
# Natural Earth 50m Raster Data
#
layers=(HYP_50M_SR)
for l in ${layers[@]}; do
  wget -N https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/raster/${l}.zip
  unzip ${l}.zip -d data/natural_earth_raster/50m_raster
  rm ${l}.zip
done
