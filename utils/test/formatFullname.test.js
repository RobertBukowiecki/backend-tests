const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

describe("formatFullname", () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(12)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname("")).to.equal("Error");
  });
  it('Should return an error if "fullname" arg format is different than <firstname> <lastname>', () => {
    expect(formatFullname("John Doe Z 123")).to.equal("Error");
    expect(formatFullname("John Doe 111")).to.equal("Error");
    expect(formatFullname("John")).to.equal("Error");
  });
  it('Should return formatted "fullname" arg', () => {
    expect(formatFullname("John Doe")).to.equal("John Doe");
    expect(formatFullname("JOHN DOE")).to.equal("John Doe");
    expect(formatFullname("jOHN dOE")).to.equal("John Doe");
    expect(formatFullname("john doe")).to.equal("John Doe");
  });
});
