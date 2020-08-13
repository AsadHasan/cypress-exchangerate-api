docker run -it -v $PWD:/e2e -w /e2e \
  -e CYPRESS_RECORD_KEY \
  cypress/included:4.12.1 --record
