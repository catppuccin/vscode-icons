{pkgs ? import <nixpkgs> {}}: let
  inherit (pkgs.stdenv) isLinux;
in
  pkgs.mkShell {
    buildInputs = with pkgs; [
      chromium
      nodejs
      yarn
    ];
    PUPPETEER_EXECUTABLE_PATH =
      if isLinux
      then "${pkgs.chromium}/bin/chromium"
      else "";
  }
