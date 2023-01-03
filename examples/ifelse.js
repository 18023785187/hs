const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  if(2 > 1): print("if")
  elif(1 < 2): print("elif")
  else: print("else");

  def ifResult =
    if(not 1): 
    begin
      return 666;
    end
    else:
    begin
      return 777;
    end;

  print(ifResult);
`)