#!/bin/bash

declare -a allPackageNames=(
  "monk-schema" 
  "client-schema" 
  "client-shared"
  "utils"
  "redis"
  "formula"
  "value-parser"
  "temporal-activities"
  "temporal-workflows"
  "shared-workflow"
)

packageFilePath=package.json
echo changing $packageFilePath 

for partialPackageName in "${allPackageNames[@]}"
do
  packageName=@talent-monk/$partialPackageName
  packageNameWithQuotes=\"$packageName\"

  oldVersionLine=''
  while read line; do
    if [[ $line =~ $packageNameWithQuotes ]] ; then oldVersionLine=$line; fi
  done < "$packageFilePath"

  if [[ -n "$oldVersionLine" ]]; then
    newVersionLine=''
    while read line; do
      if [[ $line =~ \"version\" ]] ; then newVersionLine="$packageNameWithQuotes: ${line:11:100}"; fi
    done < "../$packageName/$packageFilePath"

    echo $oldVersionLine "=>" $newVersionLine
    sed -i "s|$oldVersionLine|$newVersionLine|" package.json
  else 
    echo $packageNameWithQuotes "=>" Not Found!
  fi
done


echo "Running npm i"
npm i


echo reversing changes made to  $packageFilePath 

for partialPackageName in "${allPackageNames[@]}"
do
  packageName=@talent-monk/$partialPackageName
  packageNameWithQuotes=\"$packageName\"

  oldVersionLine=''
  while read line; do
    if [[ $line =~ $packageNameWithQuotes ]] ; then oldVersionLine=$line; fi
  done < "$packageFilePath"

  if [[ -n "$oldVersionLine" ]]; then
    newVersionLine="$packageNameWithQuotes: \"latest\","
    echo $oldVersionLine "=>" $newVersionLine
    sed -i "s|$oldVersionLine|$newVersionLine|" package.json
  else 
    echo $packageNameWithQuotes "=>" Not Found!
  fi
done



