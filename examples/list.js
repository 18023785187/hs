const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  read list = {};

  print(list, type(list));

  list{"append"}(func log(): print("hello"));

  print(list);
  list{0}();

  list{"pop"}();
  print(list);

  list{"append"}(1, 2, 3);
  print(list, len(list));

  list{"reverse"}();
  print(list);
  
  read list2 = list;
  read list3 = list{"copy"}();
  print(list == list2, list == list3);
`)