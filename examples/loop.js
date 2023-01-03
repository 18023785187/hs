const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  read list = {1, 2, 3, 4, 5};
  read list2 = list{"copy"}();

  while(len(list)):
  begin
    print(list{"pop"}());
  end
  else: print("while end");

  for(def i = 0; i < len(list2); i = i + 1):
  begin
    print(list2{i});
  end
  else: print("for end");

  read res = while(1): break 666;
  print(res);
`)