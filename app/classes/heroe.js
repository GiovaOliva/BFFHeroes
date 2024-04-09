function Heroe(id, name, description, modified, thumbnail_path, thumbnail_extension, resourceURI, teamColor){
    this.id = id;
    this.name = name;
    this.description = description;
    this.modified = modified;
    this.thumbnail_path = thumbnail_path;
    this.thumbnail_extension = thumbnail_extension;
    this.resourceURI = resourceURI;
    this.teamColor = teamColor;
}

module.exports = {Heroe};