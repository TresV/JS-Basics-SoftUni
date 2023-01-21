function cinemaTickets(input) {
    let student = 0;
    let standard = 0;
    let kid = 0;
  
    let index = 0;
  
    while (true) {
  
      let command = input[index];
      if (command === 'Finish') {
        break;
      }
  
      index++;
      let freeSeats = Number(input[index]);
      index++;
  
      let ticketsCurrentMovie = 0;
  
      let ticket = input[index];
      while (ticket !== 'Finish' && ticketsCurrentMovie < freeSeats) {
        switch (ticket) {
          case "student": student++; break;
          case "standard": standard++; break;
          case "kid": kid++; break;
        }
  
        ticketsCurrentMovie++;
        index++;
        ticket = input[index];
  
        if (ticket === 'End') {
          index++;
          break;
        }
      }
  
      console.log(`${command} - ${((ticketsCurrentMovie / freeSeats) * 100).toFixed(2)}% full.`);
  
    }
  
    let ticketsBought = student + standard + kid;
    console.log(`Total tickets: ${ticketsBought}`);
    console.log(`${((student / ticketsBought) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / ticketsBought) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / ticketsBought) * 100).toFixed(2)}% kids tickets.`);
  }

  cinemaTickets(["Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish"])

  cinemaTickets(["The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish"])
  
  