exports.simple = {
	map : function (doc) {
		if (doc.value) 
			if (! Array.isArray(doc.value)) { 
				emit(doc._id,doc.value);
			} 
	}
};

exports.redirects = {
	map : function (doc) { 
		if (Array.isArray(doc.value)) {
			for (var i in doc.value) { 
				emit(doc._id, {_id: doc.value[i]._id}, null); 
			} 
		} 
	}
};

exports.templates = {
	map : function (doc) { 
		if (doc.libraryKeys) { 
			emit(doc._id); 
			for (var i in doc.libraryKeys) { 
				emit(doc._id, {_id: doc.libraryKeys[i]._id}, null);
			} 
		}
	}
};

