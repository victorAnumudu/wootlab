SELECT apt_tenant.tenant_id, tenants.tenant_name, COUNT(apt_tenant.tenant_id) AS num_of_apt
FROM apt_tenant 
JOIN tenants ON tenants.tenant_id = apt_tenant.tenant_id 
GROUP BY apt_tenant.tenant_id HAVING COUNT(apt_tenant.tenant_id) > 1;



SELECT building.building_name, COUNT(building.building_name) AS num_of_open_req
FROM apartments
JOIN requests ON requests.apt_id = apartments.apt_id
JOIN building ON building.building_id = apartments.building_id 
WHERE requests.status = "open" 
GROUP BY building.building_name HAVING COUNT(building.building_name) > 0;