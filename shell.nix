{pkgs ? import <nixpkgs> {}}: let
  inherit (pkgs.stdenv) isLinux;
  inherit (pkgs) lib;
in
  pkgs.mkShell {
    buildInputs = with pkgs; ([
        nodejs
        nodejs.pkgs.pnpm
      ]
      ++ lib.optionals isLinux [chromium]);
    PUPPETEER_EXECUTABLE_PATH =
      if isLinux
      then "${pkgs.chromium}/bin/chromium"
      else "";
  }
