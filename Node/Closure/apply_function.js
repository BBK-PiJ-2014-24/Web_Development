var person_data_object = { first_name: "Stewart", surname: "Newnham" };

var person_func_object = {
  fullName: function(params) {
    console.log(this.first_name + " " + this.surname);
  }
};

// obj.func.APPLY(data)
person_func_object.fullName.apply(person_data_object);
